import Head from 'next/head'

export default function Title({
  suffix = 'Coderplex Community',
  children,
}: {
  suffix?: string
  children: string
}) {
  let title = children ? `${children} | ` + suffix : suffix

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  )
}
