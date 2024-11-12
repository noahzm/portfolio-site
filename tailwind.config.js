const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "1.25rem",
    },
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme }) => ({
        stone: {
          css: {
            fontSize: "1.25rem",
            "--tw-prose-body": theme("colors.stone[700]"),
            "--tw-prose-headings": theme("colors.stone[700]"),
            "--tw-prose-lead": theme("colors.stone[700]"),
            "--tw-prose-links": theme("colors.stone[700]"),
            "--tw-prose-bold": theme("colors.stone[700]"),
            "--tw-prose-counters": theme("colors.stone[500]"),
            "--tw-prose-bullets": theme("colors.stone[300]"),
            "--tw-prose-hr": theme("colors.stone[200]"),
            "--tw-prose-quotes": theme("colors.stone[900]"),
            "--tw-prose-quote-borders": theme("colors.stone[200]"),
            "--tw-prose-captions": theme("colors.stone[500]"),
            "--tw-prose-kbd": theme("colors.stone[900]"),
            "--tw-prose-code": theme("colors.stone[900]"),
            "--tw-prose-pre-code": theme("colors.stone[200]"),
            "--tw-prose-pre-bg": theme("colors.stone[800]"),
            "--tw-prose-th-borders": theme("colors.stone[300]"),
            "--tw-prose-td-borders": theme("colors.stone[200]"),
            "--tw-prose-invert-body": theme("colors.stone[300]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.stone[400]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.stone[300]"),
            "--tw-prose-invert-counters": theme("colors.stone[400]"),
            "--tw-prose-invert-bullets": theme("colors.stone[600]"),
            "--tw-prose-invert-hr": theme("colors.stone[700]"),
            "--tw-prose-invert-quotes": theme("colors.stone[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.stone[700],"),
            "--tw-prose-invert-captions": theme("colors.stone[400]"),
            "--tw-prose-invert-kbd": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.stone[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.stone[600]"),
            "--tw-prose-invert-td-borders": theme("colors.stone[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
