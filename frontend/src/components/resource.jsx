import styles from "./resource.css";
import { CopyToClipboardButton } from "../ui/copy-to-clipboard-button";

const CopyToClipboardComponent = ({ label, value }) => {
  return (
    <div className={styles.keyValueWrapper}>
      <span>{`${label}:`}</span>
      <CopyToClipboardButton value={value}>copy</CopyToClipboardButton>
    </div>
  );
};
export const Resource = ({ resource }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{resource?.name}</h2>
      <div>
        {resource?.accounts?.map((account) => (
          <div key={JSON.stringify(account)}>
            {Object.keys(account).map((key, idx) =>
              ["password", "extraPassword"].includes(key) ? null : (
                <div
                  key={JSON.stringify(account)}
                  className={styles.keyValueWrapper}
                >
                  <span>{`${key}:`}</span>
                  <span>{account[key]}</span>
                </div>
              )
            )}
            <div>
              {account.password && (
                <CopyToClipboardComponent
                  label="password"
                  value={account.password}
                />
              )}
            </div>
            <div>
              {account.extraPassword && (
                <CopyToClipboardComponent
                  label="extraPassword"
                  value={account.extraPassword}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
