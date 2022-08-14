import { Container } from "./TabPanel.style";

interface TabPanelProps {
  children?: React.ReactNode;
  currentValue: number | string;
  tabValue: number | string;
}

const TabPanel = ({ children, currentValue, tabValue }: TabPanelProps) => (
  <Container role="tabpanel" hidden={currentValue !== tabValue}>
    {children}
  </Container>
);

export default TabPanel;
