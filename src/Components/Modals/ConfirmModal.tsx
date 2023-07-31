import React from "react";
import {Box, Button, LinearProgress, Modal, Typography} from "@mui/material";

/**
 * ConfirmModal
 * @param open モーダルの表示状態
 * @param title モーダルのタイトル
 * @param message モーダルのメッセージ
 * @param onConfirm YESボタンのクリック時のコールバック
 * @param confirmText YESボタンのテキスト
 * @param onCancel NOボタンのクリック時のコールバック
 * @param cancelText NOボタンのテキスト
 * @param onDismiss OPTIONボタンのクリック時のコールバック
 * @param dismissText OPTIONボタンのテキスト
 */
export type ConfirmModalProps = {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmText?: string;
  onCancel: () => void;
  cancelText?: string;
  onDismiss?: () => void;
  dismissText?: string;
  loading?: boolean;
  helpText?: string;
  helpTextColor?: 'red' | 'green' | 'blue' | 'yellow' | 'grey' | 'white' | 'black';
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  border: 'none',
  borderRadius: 2,
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
  zIndex: 9999,
}

export const ConfirmModal: React.FC<ConfirmModalProps> = React.memo((props: ConfirmModalProps) => {
  return (
    <Modal open={props.open} onClose={props.onCancel}>
      <Box sx={style}>
        <Box sx={{ p: 1.5 }}>
          <Typography
            variant="h6"
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1.5 }}
          >
            {props.message}
          </Typography>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Box>
          {
            props.onDismiss && props.dismissText && (
              <Button
                color="primary"
                variant="text"
                onClick={props.onCancel}
                disabled={props.loading ?? false}
              >
                {props.dismissText}
              </Button>
            )
          }
          </Box>
          {
            props.helpText && (
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: props.helpTextColor ?? 'black' }}
                >
                  {props.helpText}
                </Typography>
              </Box>
            )
          }
          <Box>
            <Button
              color="primary"
              variant="text"
              onClick={props.onCancel}
              disabled={props.loading ?? false}
            >
              {props.cancelText ?? "いいえ"}
            </Button>
            <Button
              color="primary"
              variant="text"
              onClick={props.onConfirm}
              sx={{ ml: 1 }}
              disabled={props.loading ?? false}
            >
              {props.confirmText ?? "はい"}
            </Button>
          </Box>
        </Box>
        {
          props.loading && (
            <LinearProgress sx={{ position: 'absolute', bottom: 0, left: 5, right: 5 }} />
          )
        }
      </Box>
    </Modal>
  )
});