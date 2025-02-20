'use client'

import {useGlobalWalletSignerAccount} from "@abstract-foundation/agw-react";
import Link from "next/link";
import {useAccount} from "wagmi";

export default function Test() {
    const { status } = useGlobalWalletSignerAccount()
    const { address } = useAccount()

    console.log({status})
    return <Link prefetch={false} href='/test'>sadsa {address}</Link>
}