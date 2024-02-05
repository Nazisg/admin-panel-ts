import React, { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  statusType: "view" | "delete" | "update" | "create" | "resetPassword";
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FilterProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  statusType:
    | "employee"
    | "team"
    | "project"
    | "report"
    | "resetPassword"
    | any;
}

export interface TeamType {
  key: React.Key;
  team: string;
  employees: {
    name: string;
    surname: string;
  }[];
}

export interface ReportType {
  key: React.Key;
  employee: string;
  note: string;
  projectName: string;
  createdDate: string;
}

export interface ProjectType {
  key: React.Key;
  project: string;
  employees: {
    name: string;
    surname: string;
  }[];
}

export interface EmployeeType {
  key: React.Key;
  name: string;
  surname: string;
  mail: string;
  team: string;
  role: string;
  status: boolean;
}

export interface RenderIfProps {
  children: React.ReactNode;
  condition: React.ReactNode;
  renderElse: React.ReactNode;
}

export interface TableProps {
  setStatus: Dispatch<
    SetStateAction<"view" | "delete" | "update" | "create" | "resetPassword">
  >;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ActionModalProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ActionButtonProps {
  icon: JSX.Element;
  type: string;
  title: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setStatus: Dispatch<
    SetStateAction<"view" | "delete" | "update" | "create" | "resetPassword">
  >;
}
