import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-2xl">
              🏠
              <span className="sr-only">Trang chủ</span>
            </Link>
            <Link href="/con-bao-nhieu-ngay-nua-gap-nhau" className="text-2xl">
              ⌛<span className="sr-only">Đếm ngược</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
