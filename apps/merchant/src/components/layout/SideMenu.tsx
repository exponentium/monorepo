"use client"

import React, { useContext } from "react"
import Link from "next/link"
import { AiOutlineDashboard } from "react-icons/ai"
import { BiSolidCollection } from "react-icons/bi"
import { FaPeopleGroup } from "react-icons/fa6"
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"

import { SideMenuContext } from "@/context/SideMenuContext"

const SideMenu = () => {
  const { collapsed } = useContext(SideMenuContext)

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "black",
                color: "#b6c8d9",
              },
              borderRadius: "8px",
              margin: "0px 10px 0px 10px",
            },
          }}
          rootStyles={{ paddingTop: "20px" }}
        >
          <MenuItem
            component={<Link href="/dashboard/customers" />}
            icon={<AiOutlineDashboard />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link href="/customers" />}
            icon={<FaPeopleGroup />}
          >
            Members
          </MenuItem>
          <MenuItem
            component={<Link href="/collections" />}
            icon={<BiSolidCollection />}
          >
            Collections
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideMenu
