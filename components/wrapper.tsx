const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container mx-auto px-10 lg:px-0">
      {children}
    </div>
  )
}

export default Wrapper
