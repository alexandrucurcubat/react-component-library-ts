import * as RadixPopover from "@radix-ui/react-popover";
import { FC } from "react";

type PopoverProps = {
  content: string;
  children: React.ReactNode;
  side: "top" | "right" | "bottom" | "left";
};

export const Popover: FC<PopoverProps> = ({ children, side, content }) => (
  <RadixPopover.Root>
    <RadixPopover.Trigger
      css={{
        backgroundColor: "#FE4685",
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#FE4685",
        },
      }}
    >
      {children}
    </RadixPopover.Trigger>
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        css={{
          backgroundColor: "#333333",
          color: "#FFFFFF",
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
        }}
      >
        {content}
        <RadixPopover.Arrow
          css={{
            fill: "#333333",
          }}
        />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  </RadixPopover.Root>
);
