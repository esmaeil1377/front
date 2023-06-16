export interface AuthProps {
  children: React.ReactNode;
}
export interface CardProps {
  logoSrc: string;
  logoStyle: {
    height: string;
    margin: string;
  };
  src: {
    country: string;
    iso3: string;
    time: string;
    airline: string;
  };
  dst: {
    country: string;
    iso3: string;
    time: string;
    airline: string;
  };
  boarding: string;
  transfer: string;
  gates: string;
  seat: string;
  price: string;
  class: string;
}
export interface Credentials {
  username: string;
  password: string;
}

export interface ModalOpen {
  open: boolean;
  text: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface LoginResponse {
  token: string;
  result: string;
}

export interface listParameter {
  page: number;
  size: number;
}
