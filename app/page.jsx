import { ThemeProvider } from "../context/ThemeProvider";

import Toolbar from "../components/ToolBar";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/`
    );
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Home() {
  let data;

  try {
    data = await getData();
  } catch (error) {
    console.log(error.message);
  }
  return (
    <main>
      <ThemeProvider>
        <Toolbar data={data} />
      </ThemeProvider>
    </main>
  );
}
