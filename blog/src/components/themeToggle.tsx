"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const AVAILABLE_THEMES = ["dark", "light", "system"];

type Props = {
  className?: string;
};

export default function ThemeToggle({ className }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div className="flex gap-3 justify-center items-center p-3">
        Theme:
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" className={twMerge(className,"w-20")} />}
          >
            {theme?.toLocaleUpperCase()}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {AVAILABLE_THEMES.map((theme, index) => (
              <DropdownMenuItem
                key={`${index}-${theme}`}
                onClick={() => setTheme(theme)}
              >
                {theme.toUpperCase()}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
