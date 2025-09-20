# نص PowerShell لنشر المشروع على Vercel

Write-Host "🚀 بدء نشر مشروع QuranNey على Vercel..." -ForegroundColor Green

# فحص وجود Vercel CLI
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI غير مثبت" -ForegroundColor Red
    Write-Host "📦 تثبيت Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# فحص المشروع
Write-Host "🔍 فحص المشروع..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ المشروع جاهز للنشر" -ForegroundColor Green
    
    Write-Host "🌍 نشر المشروع..." -ForegroundColor Blue
    vercel --prod
    
    Write-Host "🎉 تم النشر بنجاح!" -ForegroundColor Green
    Write-Host "📝 لا تنس إضافة متغيرات البيئة في لوحة تحكم Vercel:" -ForegroundColor Yellow
    Write-Host "   - GOOGLE_AI_API_KEY" -ForegroundColor Cyan
    Write-Host "   - NEXT_PUBLIC_VERCEL_ANALYTICS=true" -ForegroundColor Cyan
} else {
    Write-Host "❌ فشل في بناء المشروع" -ForegroundColor Red
    exit 1
}