export const BaseLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <main className="min-h-screen max-h-screen h-screen w-full p-12 bg-white flex items-center justify-center base-font-color">
            {children}
        </main>
    )
}

export default BaseLayout;