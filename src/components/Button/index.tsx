import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /**
   * ボタンのテキスト
   */
  label: string;
  /**
   * クリック時のハンドラー
   */
  onClick?: () => void;
  /**
   * ボタンの種類
   */
  variant?: 'primary' | 'secondary';
  /**
   * 無効状態
   */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button; 