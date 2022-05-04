interface ButtonProps {
  text?: string;
}

function Button(props : ButtonProps) {
  return <button className="p-1 rounded text-violet-50 hover:bg-violet-700 bg-violet-300 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-1">
      <Button text="123"/>
      <Button />
    </div>
  )
}

export default App