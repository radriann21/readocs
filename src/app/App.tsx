import { MainLayout } from "@/shared/layouts/MainLayout"
import { Header } from "@/features/header/Header"
import { EditorLayout } from "@/shared/layouts/EditorLayout"
import { Editor } from "@/features/editor/Editor"
import { Preview } from "@/features/preview/Preview"

function App() {
  return (
    <MainLayout>
      <Header />
      <EditorLayout>
        <Editor />
        <Preview />
      </EditorLayout>
    </MainLayout>
  )
}

export default App