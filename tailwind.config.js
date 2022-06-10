module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b60ad1",

          secondary: "#f9804f",

          accent: "#cc20b8",

          neutral: "#222939",

          "base-100": "#384751",

          info: "#4A67E8",

          success: "#126841",

          warning: "#B79406",

          error: "#EC274B",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
