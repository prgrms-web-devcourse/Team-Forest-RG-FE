import { Tab, Tabs as MuiTabs } from "@mui/material";
import useTabs from "@/hooks/useTabs";
import TabPanel from "./TabPanel";

interface TabProps {
  data?: {
    label: string;
    value: number | string;
    disabled?: boolean;
  }[];
  renderData?: {
    value: number | string;
    targetData?: React.ReactNode;
  }[];
  direction?: "horizontal" | "vertical";
}

const Tabs = ({
  data = [],
  renderData = [],
  direction = "horizontal",
}: TabProps) => {
  const [tabValue, handleTabs] = useTabs(data[0]?.value);

  return (
    <>
      <MuiTabs value={tabValue} onChange={handleTabs} orientation={direction}>
        {data.map(({ label, value, disabled }) => (
          <Tab key={value} label={label} value={value} disabled={disabled} />
        ))}
      </MuiTabs>
      {renderData?.map(({ value, targetData }) => (
        <TabPanel key={value} currentValue={tabValue} tabValue={value}>
          {targetData}
        </TabPanel>
      ))}
    </>
  );
};

export default Tabs;
