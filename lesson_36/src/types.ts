export interface Contact {
  id: number;
  name: string;
  username: string;
  phone: string;
  email?: string;
}
export interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export interface FormValues {
  name: string;
  username: string;
  phone: string;
}
