interface TabPanelProps {
  children?: React.ReactNode;
  currentValue: number | string;
  tabValue: number | string;
}

const TabPanel = ({ children, currentValue, tabValue }: TabPanelProps) => (
  <div role="tabpanel" hidden={currentValue !== tabValue}>
    {children}
  </div>
);

export default TabPanel;
