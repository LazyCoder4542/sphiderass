import Page from "@/components/layouts/page";
function Page404() {
  return (
    <Page pageStyle="" showFooter={false}>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        gap: '1rem',
        flex: 1,
      }}>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div className="btn btn-primary">Go to Homepage</div>
      </section>
    </Page>
  );
}

export default Page404;