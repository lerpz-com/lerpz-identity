import { PageContainer } from '@toolpad/core/PageContainer';

export default function DashboardPagesLayout(props: { children: React.ReactNode }) {
  return (
    <PageContainer>{props.children}</PageContainer>
  );
}
