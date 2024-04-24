import { cx } from "../utils/tool";
import styles from "./style.module.css";

export const Container = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cx(
        styles.container,
        "font-medium text-2xl mt-4 text-black",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
