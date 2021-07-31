import styled from "@emotion/styled"


interface PropsItemMenu {
	/**
	 * Is this the principal call to action on the page?
	 */
	test?: string;
	/**
	 * Is this the principal call to action on the page?
	 */
	itemMenu: {
		href: string;
		value: string;
	}
}

const StyleItemMenu = styled("span")`
	font-size: 18px;
	cursor: pointer;
	position: relative;
	white-space: nowrap;
	color: ${({ theme }) => theme.colorPrimary};
	background-color: ${({ theme }) => theme.colorPrimary};

	&:before, &:after{
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colorPrimary};
    top: 100%;
    left: 0;
    pointer-events: none;
	}
	&:before {
		content: '';
		transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
	}
	&:hover:before {
		transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
	}
`

/**
 * Atom de la navigation
 */
const ItemMenu = ({ itemMenu }: PropsItemMenu) =>
	<StyleItemMenu>{itemMenu.value}</StyleItemMenu>;

export default ItemMenu