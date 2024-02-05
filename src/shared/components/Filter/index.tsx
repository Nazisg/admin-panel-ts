import { DatePicker, Drawer, Form, Input, Select, SelectProps } from "antd";
import { FilterProps } from "shared/types";

const Filter: React.FC<FilterProps> = ({
  modalOpen,
  setModalOpen,
  statusType,
}) => {
  const { RangePicker } = DatePicker;
  const optionsTeams: SelectProps["options"] = [];
  const optionsProject: SelectProps["options"] = [];
  const optionsEmployees: SelectProps["options"] = [];

  const teams = [
    { id: "1", teamName: "Frontend" },
    { id: "2", teamName: "Backend" },
    { id: "3", teamName: "Mobile" },
  ];
  const projects = [
    { id: "1", projectName: "Plast" },
    { id: "2", projectName: "Furniro" },
    { id: "3", projectName: "DailyReport" },
  ];
  const employees = [
    { id: "1", employeeName: "Nazrin Isgandarova" },
    { id: "2", employeeName: "Rahman Aliyev" },
    { id: "3", employeeName: "Lala Agayeva" },
  ];
  teams.map((team) => {
    optionsTeams.push({
      value: team.id,
      label: team.teamName,
    });
  });
  projects.map((project) => {
    optionsProject.push({
      value: project.id,
      label: project.projectName,
    });
  });
  employees.map((employee) => {
    optionsEmployees.push({
      value: employee.id,
      label: employee.employeeName,
    });
  });
  const handleChangeTeams = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleChangeProjects = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleChangeEmployees = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const status = {
    employee: (
      <>
        <Form name="basic" autoComplete="off" layout="vertical">
          <Form.Item label="Teams" name="teams">
            <Select
              mode="tags"
              size="large"
              onChange={handleChangeTeams}
              placeholder="Frontend"
              options={optionsTeams}
            />
          </Form.Item>
          <Form.Item label="Project Name" name="projectName">
            <Select
              mode="tags"
              size="large"
              placeholder="Furniro"
              onChange={handleChangeProjects}
              options={optionsProject}
            />
          </Form.Item>
          <Form.Item label="Name" name="firstName">
            <Input placeholder="Nazrin" size="large" />
          </Form.Item>
          <Form.Item label="Surname" name="lastName">
            <Input placeholder="Isgandarova" size="large" />
          </Form.Item>
        </Form>
      </>
    ),
    team: (
      <>
        <Form name="basic" autoComplete="off" layout="vertical">
          <Form.Item label="Team " name="teamName">
            <Input placeholder="Frontend" size="large" />
          </Form.Item>
        </Form>
      </>
    ),
    project: (
      <>
        <Form name="basic" autoComplete="off" layout="vertical">
          <Form.Item label="Project Name" name="projectName">
            <Input placeholder="Furniro" size="large" />
          </Form.Item>
        </Form>
      </>
    ),
    report: (
      <>
        <Form name="basic" autoComplete="off" layout="vertical">
          <Form.Item label="Date range" name="date">
            <RangePicker size="large" />
          </Form.Item>

          <Form.Item label="Project Name" name="projectName">
            <Select
              mode="tags"
              size="large"
              placeholder="Furniro"
              onChange={handleChangeProjects}
              options={optionsProject}
            />
          </Form.Item>
          <Form.Item label="Employees" name="employees">
            <Select
              mode="tags"
              size="large"
              placeholder="Nazrin Isgandarova"
              onChange={handleChangeEmployees}
              options={optionsEmployees}
            />
          </Form.Item>
        </Form>
      </>
    ),
  };

  return (
    <Drawer title="Filter" onClose={() => setModalOpen(false)} open={modalOpen}>
      {
        //@ts-ignore
        status[statusType]
      }
    </Drawer>
  );
};

export default Filter;
