'use client';

import React from "react";

import posthog from 'posthog-js'
import {PostHogProvider} from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export function PHProvider({
                             children,
                           }: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}