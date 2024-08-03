import React from "react";
import styles from "./Text.module.css";

type TextStyleVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "subtitle"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "caption";

type TextComponentVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
type TextComponentVariantsProps =
  | React.ComponentPropsWithoutRef<"h1">
  | React.ComponentPropsWithoutRef<"h2">
  | React.ComponentPropsWithoutRef<"h3">
  | React.ComponentPropsWithoutRef<"h4">
  | React.ComponentPropsWithoutRef<"h5">
  | React.ComponentPropsWithoutRef<"p">
  | React.ComponentPropsWithoutRef<"span">;

const StylesMapping: Record<TextStyleVariant, string> = {
  heading1: styles.heading_1,
  heading2: styles.heading_2,
  heading3: styles.heading_3,
  heading4: styles.heading_4,
  subtitle: styles.subtitle,
  bodyLarge: styles.body_large,
  bodyMedium: styles.body_medium,
  bodySmall: styles.body_small,
  caption: styles.caption,
};

const TextComponentsMapping: Record<
  TextComponentVariants,
  React.FC<TextComponentVariantsProps>
> = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => <h1 {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => <h2 {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => <h3 {...props} />,
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => <h4 {...props} />,
  h5: (props: React.ComponentPropsWithoutRef<"h5">) => <h5 {...props} />,
  p: (props: React.ComponentPropsWithoutRef<"p">) => <p {...props} />,
  span: (props: React.ComponentPropsWithoutRef<"span">) => <span {...props} />,
};
type _TextProps = {
  variant: TextStyleVariant;
  component: TextComponentVariants;
} & TextComponentVariantsProps;

const _Text: React.FC<_TextProps> = ({
  variant,
  component,
  className,
  ...props
}) => {
  const style = StylesMapping[variant];
  const Component = TextComponentsMapping[component];

  return <Component className={[style, className].join(" ")} {...props} />;
};

type TextProps =
  | ({ component?: "h1" } & React.ComponentPropsWithoutRef<"h1">)
  | ({ component?: "h2" } & React.ComponentPropsWithoutRef<"h2">)
  | ({ component?: "h3" } & React.ComponentPropsWithoutRef<"h3">)
  | ({ component?: "h4" } & React.ComponentPropsWithoutRef<"h4">)
  | ({ component?: "h5" } & React.ComponentPropsWithoutRef<"h5">)
  | ({ component?: "p" } & React.ComponentPropsWithoutRef<"p">)
  | ({ component?: "span" } & React.ComponentPropsWithoutRef<"span">);

export const Text = {
  h1: ({ component = "h1", ...props }: TextProps) => (
    <_Text variant={"heading1"} component={component} {...props} />
  ),
  h2: ({ component = "h2", ...props }: TextProps) => (
    <_Text variant={"heading2"} component={component} {...props} />
  ),
  h3: ({ component = "h3", ...props }: TextProps) => (
    <_Text variant={"heading3"} component={component} {...props} />
  ),
  h4: ({ component = "h4", ...props }: TextProps) => (
    <_Text variant={"heading4"} component={component} {...props} />
  ),
  subtitle: ({ component = "h5", ...props }: TextProps) => (
    <_Text variant={"subtitle"} component={component} {...props} />
  ),
  bodyLarge: ({ component = "p", ...props }: TextProps) => (
    <_Text variant={"bodyLarge"} component={component} {...props} />
  ),

  bodyMedium: ({ component = "p", ...props }: TextProps) => (
    <_Text variant={"bodyMedium"} component={component} {...props} />
  ),
  bodySmall: ({ component = "p", ...props }: TextProps) => (
    <_Text variant={"bodySmall"} component={component} {...props} />
  ),
  caption: ({ component = "span", ...props }: TextProps) => (
    <_Text variant={"caption"} component={component} {...props} />
  ),
};
