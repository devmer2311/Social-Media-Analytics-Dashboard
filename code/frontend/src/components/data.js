import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export const analyticsData = [
  {
    platform: "Twitter",
    followers: "280k",
    icon: <FaTwitter />,
  },
  {
    platform: "Instagram",
    followers: "680k",
    icon: <FaInstagram />,
  },
  {
    platform: "YouTube",
    followers: "2.3M",
    icon: <FaYoutube />,
  },
  {
    platform: "Facebook",
    followers: "50k",
    icon: <FaFacebook />,
  },
];

export const chartData = {
  labels: ["Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9"],
  datasets: [
    {
      label: "Subscribers Gained",
      data: [30, 50, 40, 70, 60],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Subscribers Lost",
      data: [10, 20, 10, 30, 20],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

export const keyMetricsData = [
  { metric: "Clicks", value: "10k", target: "12k" },
  { metric: "Likes", value: "680", target: "520" },
  { metric: "Followers", value: "8k", target: "12.5k" },
  { metric: "Impressions", value: "369", target: "10k" },
];
