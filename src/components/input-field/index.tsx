import styles from "./style.module.scss";

type InputFieldProps = {
  title?: string;
  placeholder: string;
  type?: "text" | "number";
  helpText?: string;
  withPrefix?: boolean;
  withIcon?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  title,
  placeholder,
  type = "text",
  helpText = "",
  withIcon = false,
  withPrefix = false,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className={styles["input-field"]}>
      {title && (
        <label htmlFor="" className={styles.label}>
          {title}
        </label>
      )}
      <div className={styles["input-wrapper"]}>
        {withPrefix && <span className={styles.prefix}>$</span>}
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {withIcon && <SerachIcon />}
      </div>
      {helpText && <span>{helpText}</span>}
    </div>
  );
}

function SerachIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M14.3538 14.1463L11.2244 11.0175C12.1314 9.92859 12.5837 8.53189 12.4872 7.11798C12.3906 5.70407 11.7527 4.38181 10.7061 3.42625C9.65951 2.4707 8.2848 1.95543 6.86796 1.98763C5.45113 2.01983 4.10125 2.59702 3.09913 3.59913C2.09702 4.60125 1.51983 5.95113 1.48763 7.36796C1.45543 8.7848 1.9707 10.1595 2.92625 11.2061C3.88181 12.2527 5.20407 12.8906 6.61798 12.9872C8.03189 13.0837 9.42859 12.6314 10.5175 11.7244L13.6463 14.8538C13.6927 14.9002 13.7479 14.9371 13.8086 14.9622C13.8693 14.9874 13.9343 15.0003 14 15.0003C14.0657 15.0003 14.1308 14.9874 14.1915 14.9622C14.2522 14.9371 14.3073 14.9002 14.3538 14.8538C14.4002 14.8073 14.4371 14.7522 14.4622 14.6915C14.4874 14.6308 14.5003 14.5657 14.5003 14.5C14.5003 14.4343 14.4874 14.3693 14.4622 14.3086C14.4371 14.2479 14.4002 14.1927 14.3538 14.1463ZM2.50002 7.50002C2.50002 6.61 2.76394 5.73998 3.25841 4.99995C3.75287 4.25993 4.45568 3.68316 5.27795 3.34256C6.10021 3.00197 7.00501 2.91285 7.87793 3.08649C8.75084 3.26012 9.55266 3.6887 10.182 4.31804C10.8113 4.94738 11.2399 5.7492 11.4136 6.62211C11.5872 7.49503 11.4981 8.39983 11.1575 9.2221C10.8169 10.0444 10.2401 10.7472 9.50009 11.2416C8.76007 11.7361 7.89004 12 7.00002 12C5.80695 11.9987 4.66313 11.5242 3.8195 10.6805C2.97587 9.83691 2.50134 8.69309 2.50002 7.50002Z"
        fill="#201F24"
      />
    </svg>
  );
}
