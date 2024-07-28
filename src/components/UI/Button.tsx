import * as React from "react";
import cn from "clsx";

enum ButtonVariant {
    Default = "default",
    Destructive = "destructive",
    Outline = "outline",
    Secondary = "secondary",
    Ghost = "ghost",
    Link = "link",
}

enum ButtonSize {
    Default = "default",
    Small = "sm",
    Large = "lg",
    Icon = "icon",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = ButtonVariant.Default, size = ButtonSize.Default, asChild = false, ...props }, ref) => {
        const Comp: React.ElementType = asChild ? "span" : "button";

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
        const variantStyles = {
            [ButtonVariant.Default]: "bg-primary text-primary-foreground hover:bg-primary/90",
            [ButtonVariant.Destructive]: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            [ButtonVariant.Outline]: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            [ButtonVariant.Secondary]: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            [ButtonVariant.Ghost]: "hover:bg-accent hover:text-accent-foreground",
            [ButtonVariant.Link]: "text-primary underline-offset-4 hover:underline",
        };
        const sizeStyles = {
            [ButtonSize.Default]: "h-10 px-4 py-2",
            [ButtonSize.Small]: "h-9 rounded-md px-3",
            [ButtonSize.Large]: "h-11 rounded-md px-8",
            [ButtonSize.Icon]: "h-10 w-10",
        };

        return (
            <Comp
                className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { ButtonVariant, ButtonSize };
