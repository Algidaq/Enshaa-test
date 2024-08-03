import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "320px",
      md2: "990px",
      ...defaultTheme.screens,
    },
    container: {
      padding: "1rem",
    },
    colors: {
      primary: {
        "100": "#E3D6F5",
        "200": "#C7ADEB",
        "300": "#AB84E1",
        "400": "#8F5BD7",
        "500": "#532494",
        "600": "#5C28A4",
        "700": "#451E7B",
        "800": "#2E1452",
        "900": "#170A29",
      },
      secondary: {
        "100": "#CDF5FE",
        "200": "#9AECFE",
        "300": "#68E2FD",
        "400": "#35D8FD",
        "500": "#03C7F3",
        "600": "#02A5CA",
        "700": "#027C97",
        "800": "#015365",
        "900": "#012932",
      },
      tertiary: {
        "100": "#D3F5F8",
        "200": "#A8EBF0",
        "300": "#7CE2E9",
        "400": "#51D8E1",
        "500": "#2CCFDB",
        "600": "#1EA5AE",
        "700": "#167C83",
        "800": "#0F5257",
        "900": "#07292C",
      },
      netural: {
        "100": "#FFFFFF",
        "200": "#E6E6E6",
        "300": "#CCCCCC",
        "400": "#B3B3B3",
        "500": "#999999",
        "600": "#666666",
        "700": "#4D4D4D",
        "800": "#333333",
        "900": "#1A1A1A",
      },
      "action-and-links-color": "#2B2C6D",
      error: "#FB4E4E",
      divider: "#E6E6E6",
      subtitle: "#999999",
      body: "#4D4D4D",
      title: "#1A1A1A",
      success: "#2AC769",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
