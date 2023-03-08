import styles from "./copy-to-clipboard-button.css";

const copyToClipboard = (value) => {
  navigator.clipboard.writeText(value);
};
export const CopyToClipboardButton = ({ value, children, ...props }) => {
  return (
    <button onClick={() => copyToClipboard(value)} {...props}>
      {children}
    </button>
  );
};
