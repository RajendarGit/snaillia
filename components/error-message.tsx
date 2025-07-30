const ErrorMessage = ({ msg }: { msg: string }) => {
  return (
    <p className="text-red-500">{msg}</p>
  )
}

export default ErrorMessage