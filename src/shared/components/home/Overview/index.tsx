import { Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import "./styles.scss";
export default function index() {
  return (
    <Content className="overview">
      <Typography.Title className="text">Overview</Typography.Title>
      <div className="cards">
        <Card className="card">
          <Typography.Paragraph>Project</Typography.Paragraph>
          <Typography.Paragraph>10</Typography.Paragraph>
        </Card>
        <Card className="card">
          <Typography.Paragraph>Project</Typography.Paragraph>
          <Typography.Paragraph>10</Typography.Paragraph>
        </Card>
        <Card className="card">
          <Typography.Paragraph>Project</Typography.Paragraph>
          <Typography.Paragraph>10</Typography.Paragraph>
        </Card>
        <Card className="card">
          <Typography.Paragraph>Project</Typography.Paragraph>
          <Typography.Paragraph>10</Typography.Paragraph>
        </Card>
      </div>
    </Content>
  );
}
