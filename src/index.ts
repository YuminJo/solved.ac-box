import { Octokit } from "@octokit/rest";
import solvedacQuery from "./queries";
import { config } from "dotenv";
import {
  generateBarChart,
  getCurrTierInfo,
  getNextTierInfo,
  getPercent,
} from "./utils";
import { FULL_WIDTH } from "./common";

/**
 * get environment variable
 */
config({ path: [".env"] });

(async () => {
  /**
   * First, get solved.ac user info
   */
  const res = await solvedacQuery({
    username: `${process.env.USERNAME}`,
  }).catch((error) => console.error(`Unable to get username and id\n${error}`));
  if (!res) {
    console.error(`Invalid res`);
    return;
  }

  /**
   * Second, create contents
   *
   * first line. Tier and rating, points remaining until next tier
   *
   * second line. Bar chart
   *
   * third line. Bio
   *
   * fourth line. Solved count, rank
   */
  const { bio, tier, solvedCount, rating, rank } = res;
  const { label, startRating } = getCurrTierInfo(tier);
  const nextTierInfo = getNextTierInfo(tier);
  const percent = getPercent(
    startRating,
    nextTierInfo?.startRating ?? 3_000,
    rating
  );
  const csCodingTitleLine = `🧪 C# Coding Test Status`;
  
  const firstLine = () => {
    const left = `${label}, ${rating}p`;
    if (!nextTierInfo) {
      return left;
    }
    const right = `Points to ${nextTierInfo.label} ${
      rating - nextTierInfo.startRating
    }p`;
    return left.padEnd(FULL_WIDTH - 2 - right.length, " ") + right;
  };

  const lines = [
    csCodingTitleLine,
    firstLine(),
    generateBarChart(percent, FULL_WIDTH),
    `${bio}`,
    `${
      "✅ " +
      "Problems Solved".padEnd(5) +
      `${solvedCount}Problems`.padStart(14) +
      " ".repeat(4) +
      "📈 " +
      "Rank".padEnd(5) +
      `${rank}th`.padStart(14)
    }`,
  ];

  /**
   * Finally, write into gist
   */
  const octokit = new Octokit({ auth: `token ${process.env.GH_TOKEN}` });
  const gist = await octokit.gists
    .get({
      gist_id: `${process.env.GIST_ID}`,
    })
    .catch((error) => console.error(`Unable to update gist\n${error}`));
  if (!gist) return;

  if (!gist.data.files) {
    console.error("No file found in the gist");
    return;
  }

  const filename = Object.keys(gist.data.files)[0];
  await octokit.gists.update({
    gist_id: `${process.env.GIST_ID}`,
    files: {
      [filename]: {
        filename: `[ Solved.ac Status ]`,
        content: lines.join("\n"),
      },
    },
  });

  console.log("Success to update the gist 🎉");
})();
