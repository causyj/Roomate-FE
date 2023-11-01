import styled from "styled-components";

export function BaseLayout({ children }: React.PropsWithChildren<{}>): React.ReactElement {
    return (
        <main className="min-h-screen max-h-screen h-screen w-full p-12 bg-white flex items-start justify-center marker:base-font-color">
             {children}
        </main>
    )
};


