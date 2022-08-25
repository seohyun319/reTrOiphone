import styled from '@emotion/styled';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';

type TextProps = ColorProps & TypographyProps;

const Text = styled.span<TextProps>(color, typography);

export default Text;
