"use client";

import React from "react";
import { FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import Link from "next/link";

import { IconButton } from "@/components/UI/IconButton";
import { Logo } from "@/components/UI/Logo";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import type { NavigationStructure } from "@/types";

import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

type Props = NavigationStructure & {
	children?: React.JSX.Element | React.JSX.Element[];
};

export const Navbar = ({ children, navigation }: Props) => {
	const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

	return (
		<>
			<MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigation={navigation} />
			<header className="relative">
				<nav aria-label="Top navigation">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="hidden lg:flex lg:flex-1">
								<Link href="/">
									<Logo priority includeText className="h-9 w-auto" />
								</Link>
							</div>
							<div className="hidden h-full lg:flex">
								<DesktopMenu navigation={navigation} />
							</div>
							<div className="flex flex-1 items-center lg:hidden">
								<IconButton
									icon={FaBars}
									hiddenLabel="Open menu"
									onClick={() => setMobileMenuOpen(true)}
									className="md:size-5"
								/>
								<IconButton
									icon={FiSearch}
									hiddenLabel="Search"
									onClick={() => setMobileMenuOpen(true)}
									className="ml-4 md:size-5"
								/>
							</div>
							{children}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};
