'use client';

import { PropsWithChildren } from 'react';
import { RootLayout } from '@/components/layout/root';
import { useChallengeDetail } from '@/domain/challenge';
import { useParams } from 'next/navigation';
import type { BreadcrumbItem } from '@/components/breadcrumbs';

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
    const { id } = useParams<{ id: string }>();
    const { challengePreview } = useChallengeDetail(id);
    let breadcrumbs: BreadcrumbItem[] = [];

    if (!id) {
        breadcrumbs = [{ label: 'Monitor your ongoing, upcoming, and finished challenges.' }];
    } else if (challengePreview) {
        breadcrumbs = [{ label: 'Challenges' }, { label: challengePreview.title }];
    }

    return (
        <RootLayout title="Challenges" breadcrumbs={breadcrumbs} icon="trophy">
            {children}
        </RootLayout>
    );
}
