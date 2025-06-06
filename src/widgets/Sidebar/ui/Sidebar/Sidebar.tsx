import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>Toggle</Button>
      <LangSwitcher />
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

// import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./Sidebar.module.scss"

// interface SidebarProps {
//     className?: string
// }

// export const Sidebar = ({className}: SidebarProps) => {
//     return (
//         <div className={classNames(cls.sidebar, {}, [className])}>

//         </div>
//     )
// }
