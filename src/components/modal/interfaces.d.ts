export interface IModal {
	modalIsOpen: boolean;
	children: React.ReactElement;
	setModalOpen: (value: boolean) => void;
}
