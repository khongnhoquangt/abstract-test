'use client'

import {useGlobalWalletSignerAccount} from "@abstract-foundation/agw-react";
import Link from "next/link";
import {useAccount} from "wagmi";

export default function Test() {
    const { status } = useGlobalWalletSignerAccount()
    const { address } = useAccount()
    console.log({status})
    return <Link href='/test-2'>sadsa {address}</Link>
}