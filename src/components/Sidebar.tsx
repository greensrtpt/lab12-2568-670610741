import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar({ userName, type }: SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
       </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        {/* <Text>Sireethorn</Text> */}
        <Group>
         <Indicator inline size={14} offset={4} position="bottom-end" color="red" withBorder>
            <Avatar
              radius="xl"
              src="/sireethornpic.jpeg"
      
            />
          </Indicator>
          <Stack gap={0}>
            <Text size="sm" fw={500}>
              User: {userName} :  {type === "admin" ? "Admin" : "Student"}
            </Text>
        
          </Stack>
        </Group>
     
      </Box>
    </Stack>
  );
}
