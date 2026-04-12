import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(_event, newMode) => {
        setMode(newMode);
      }}
    >
      <Option value="system">🖥️ System</Option>
      <Option value="light">☀️ Light</Option>
      <Option value="dark">🌙 Dark</Option>
    </Select>
  );
}