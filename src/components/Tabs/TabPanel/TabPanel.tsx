interface TabPanelProps {
  children?: React.ReactNode;
  currentValue: number | string;
  tabValue: number | string;
}

const TabPanel = ({ children, currentValue, tabValue }: TabPanelProps) => (
  <div hidden={currentValue !== tabValue}>
    {currentValue === tabValue && children}
  </div>
);

export default TabPanel;
