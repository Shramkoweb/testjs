import type { PropsWithChildren } from "react";

import { Sidebar } from "@/components/sidebar/sidebar";
import { PageHeader, type PageHeaderProps } from "@/components/page-header";

export const RootLayout = (props: PropsWithChildren & PageHeaderProps) => {
    const { children, title, icon, breadcrumbs } = props;

    return (
        <div className='h-screen flex'>
            <Sidebar/>

            <main className='flex flex-col flex-1'>
                <PageHeader
                    title={title}
                    icon={icon}
                    breadcrumbs={breadcrumbs}
                />

                <section className='min-h-0 h-full'>{children}</section>
            </main>
        </div>
    );
};
