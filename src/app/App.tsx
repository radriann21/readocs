import { MainLayout } from "@/shared/layouts/MainLayout"
import { Header } from "@/features/header/Header"
import { EditorLayout } from "@/shared/layouts/EditorLayout"
import { Editor } from "@/features/editor/Editor"
import { Preview } from "@/features/preview/Preview"
import { ChooseTemplate } from "@/features/editor/components/ChooseTemplate"

function App() {
  return (
    <MainLayout>
      <Header />
      <EditorLayout>
        <Editor />
        <Preview />
        <ChooseTemplate />
      </EditorLayout>
    </MainLayout>
  )
}

export default App