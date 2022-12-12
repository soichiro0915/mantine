import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { ActionIcon, Center, Menu, Button } from '@mantine/core'
import { Settings } from 'tabler-icons-react'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import Link from 'next/link'

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>

      <Center>
        <Menu width={200} position="right-start">
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>UI Components</Menu.Label>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/button"
            >
              Button
            </Menu.Item>
            <Menu.Item icon={<Settings size={16} />} component="a" href="/grid">
              Grid
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/group"
            >
              Group
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/multi-select"
            >
              Multi Select
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/fetch-api"
            >
              Data loader
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/dialog"
            >
              Dialog
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/modal"
            >
              Modal
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/avatar"
            >
              Avatar
            </Menu.Item>
            <Menu.Item icon={<Settings size={16} />} component="a" href="/card">
              Card
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/performance"
            >
              Performance Indicator
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/table"
            >
              Table
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/crypto"
            >
              Crypto
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/notification"
            >
              Notification
            </Menu.Item>
            <Menu.Item
              icon={<Settings size={16} />}
              component={Link}
              href="/hooks"
            >
              Hooks
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Center>

      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
