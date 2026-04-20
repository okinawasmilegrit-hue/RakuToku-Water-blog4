import { 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  Droplets, 
  GlassWater, 
  Recycle, 
  ShieldCheck 
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans text-[#2c3e50] flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 shrink-0">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-[#0d4f7a] tracking-tight">RakuToku Water</div>
          <a 
            href="#campaign"
            className="text-sm font-bold bg-[#0d4f7a] text-white px-4 py-2 rounded-lg hover:bg-[#08203c] transition shadow-sm"
          >
            無料お試し
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col items-center justify-center bg-[#08203c] shrink-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://picsum.photos/seed/kitchen_water/1920/1080?blur=2" 
            className="w-full h-full object-cover transform scale-105" 
            alt="ウォーターサーバーのあるキッチン" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08203c]/70 via-[#0d4f7a]/55 to-[#1a6fa8]/35 z-10"></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <span className="bg-[#00c2ff] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 mb-6 rounded shadow-sm">Maintenance-free Life</span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            毎日のお水補充、<br className="sm:hidden"/>負担になっていませんか？<br className="hidden sm:block"/>
            <span className="text-lg sm:text-2xl md:text-4xl mt-4 sm:mt-6 inline-block font-medium text-white/90 leading-snug">
              給水型から「水道直結型」という<br className="sm:hidden"/>新しい選択肢
            </span>
          </h1>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-8 py-10 md:py-14 gap-8 flex flex-col -mt-16 relative z-30">
        
        {/* Intro */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#0d4f7a] pl-3 leading-snug">
            日々の小さな負担に<br className="sm:hidden"/>気づくとき
          </h3>
          <p className="text-base sm:text-lg font-medium text-[#2c3e50] leading-loose">
            家事やお仕事、育児に毎日忙しい中。<br/>
            重いお水を運んだり、何度もサーバーに補充したり…<br/>
            本当にお疲れ様です。
          </p>
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
            <p className="text-slate-600 leading-loose text-base sm:text-lg">
              「重いボトルの交換がイヤだから、自分で水道水を注ぐ給水型のサーバーを選んだ」<br/>
              という方は非常に多いと思います。
            </p>
            <p className="text-slate-600 leading-loose text-base sm:text-lg mt-4">
              ボトルの受け取りや重い交換作業、そしてゴミ捨てもなくて、導入した最初はすごく画期的で便利に感じますよね。
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#0d4f7a] pl-4 leading-normal">
            お水を使う量が増えると見えてくる<br className="md:hidden"/>「日々の小さな負担」
          </h2>
          <p className="text-slate-600 leading-loose text-base sm:text-lg">
            ボトルレスで便利な給水型サーバー。<br/>
            ですが、ご家族の成長や、お家で過ごす時間の変化によって、少しずつこんな「気づき」を感じることはありませんか？
          </p>

          <div className="flex flex-col gap-5 mt-2">
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-red-50 p-5 rounded-lg border border-red-100">
              <AlertTriangle className="text-[#c0392b] w-6 h-6 self-start shrink-0 mt-1" />
              <p className="text-[#c0392b] leading-loose font-medium text-base sm:text-lg">
                「お料理や麦茶作りで、あっという間にタンクが空になっちゃう…」
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-slate-50 p-5 rounded-lg border border-slate-100">
              <Clock className="text-slate-600 w-6 h-6 self-start shrink-0 mt-1" />
              <p className="text-slate-600 leading-loose font-medium text-base sm:text-lg">
                「飲みたい時に『あ、水がない！』と気づいて、ピッチャーで何度も往復するのが地味に大変」
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-slate-50 p-5 rounded-lg border border-slate-100">
              <ShieldCheck className="text-slate-600 w-6 h-6 self-start shrink-0 mt-1" />
              <p className="text-slate-600 leading-loose font-medium text-base sm:text-lg">
                「衛生面を考えてタンクをこまめに洗いたいけど、大きくて重いからシンクで洗うのが一苦労」
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-loose text-base sm:text-lg mt-4 font-medium border-b border-slate-100 pb-6">
            最初は気にならなかった「お水を注ぐ」という作業も、1日に何度も繰り返すとなると、案外かなりの時間と労力を使っているものです。
          </p>

          <figure className="overflow-hidden rounded-lg shadow-sm border border-slate-100 mt-2">
            <img 
              src="https://picsum.photos/seed/tired_water/800/450" 
              alt="また空になってるという日常のため息の瞬間" 
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer" 
            />
            <figcaption className="text-center text-sm font-medium text-slate-500 py-4 bg-slate-50 border-t border-slate-100">
              お水を入れるの、1日何回やってるかな…？
            </figcaption>
          </figure>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#0d4f7a] pl-4 leading-normal">
            「契約の縛り」で<br className="md:hidden"/>身動きが取れなくなることも
          </h2>
          <p className="text-slate-600 leading-loose text-base sm:text-lg">
            また、給水型サーバーをお使いの方からよく耳にするのが、「契約期間」に関するお悩みです。
          </p>
          <div className="bg-red-50 p-6 rounded-lg text-[#c0392b] leading-loose border border-red-100 font-medium text-base sm:text-lg">
            「補充の手間やタンク洗いが負担になってきたから解約したいな…」<br/><br/>
            と思っても、給水型サーバーは「5年」など非常に長い契約期間が設定されていることが多く、<br/><br/>
            「高額な解約金がネックになって、仕方なく使い続けている」<br/>
            という声も少なくありません。
          </div>
          <p className="text-slate-600 leading-loose text-base sm:text-lg mt-2">
            生活スタイルが変わっていく中で、長期間同じものを使い続けなければいけないのは、少し窮屈に感じてしまうこともありますよね。
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#0d4f7a] pl-4 leading-normal">
            ご家庭に合った<br className="md:hidden"/>「ウォーターサーバー」の選び方
          </h2>
          <p className="text-slate-600 leading-loose text-base sm:text-lg">
            もし、「お水を飲む量がそれほど多くない」「1日に何度も補充しなくて済んでいる」というご家庭なら、今の給水型のままが合っているかもしれません。
          </p>
          
          <div className="p-6 sm:p-8 bg-[#f4f7f9] border border-slate-200 rounded-xl text-[#2c3e50] shadow-sm mt-2">
            <p className="font-bold text-base sm:text-lg leading-loose">
              一方で、<br/>
              <span className="bg-white px-2 py-1 inline-block my-1 shadow-sm rounded text-[#0d4f7a]">「毎日のお水補充が日課になっていて負担を感じる」</span><br/>
              <span className="bg-white px-2 py-1 inline-block my-1 shadow-sm rounded text-[#0d4f7a]">「タンクのお手入れの手間をなくしたい」</span><br/>
              <span className="bg-white px-2 py-1 inline-block my-1 shadow-sm rounded text-[#0d4f7a]">「契約の縛りを気にせず使いたい」</span><br/><br/>
              と感じ始めているなら、次の選択肢として<br className="hidden sm:block"/>
              <span className="text-xl md:text-2xl text-[#0d4f7a] underline decoration-[#0d4f7a]/30 decoration-4 underline-offset-4 mx-1">「水道直結型」</span>
              のウォーターサーバーを検討してみるのも一つの手です。
            </p>
          </div>

          <figure className="overflow-hidden rounded-lg shadow-sm border border-slate-100 mt-4">
            <img 
              src="https://picsum.photos/seed/smile_kitchen/800/450" 
              alt="補充しなくていいって、こんなに身軽なんだという雰囲気" 
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer" 
            />
            <figcaption className="text-center text-sm font-medium text-slate-500 py-4 bg-slate-50 border-t border-slate-100">
              補充しなくていいって、こんなに身軽なんだ。
            </figcaption>
          </figure>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d4f7a] border-l-4 border-[#0d4f7a] pl-4 leading-normal">
            「補充なし・タンク洗いなし」の<br className="md:hidden"/>水道直結型という選択肢
          </h2>
          <p className="text-slate-600 leading-loose text-base sm:text-lg">
            最近、沖縄のママさんたちの間で少しずつ増えているのが、水道管に直接つないで使う「水道直結型ウォーターサーバー」への乗り換えです。<br/><br/>
            たとえば、沖縄の水質に合わせて開発された「ラクトク（楽得）ウォーター」などの直結型サーバーには、こんな特徴があります。
          </p>

          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <Droplets className="text-[#00c2ff] w-10 h-10 self-start shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0d4f7a] mb-3 leading-normal">お水の補充が一切不要！<br className="sm:hidden"/>「完全自動」</h3>
                <p className="text-slate-600 sm:text-lg leading-loose">
                  水道管から直接お水が供給されるため、タンクに自分で水を注ぐ手間は一生必要ありません。<br/>
                  「水が切れてる！」というイライラもなくなり、好きなだけ冷水とお湯が使えます。
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <Recycle className="text-[#00c2ff] w-10 h-10 self-start shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0d4f7a] mb-3 leading-normal">タンク洗いの手間もなし！</h3>
                <p className="text-slate-600 sm:text-lg leading-loose">
                  大きなタンクを取り外してゴシゴシ洗う必要もありません。<br/>
                  サーバー内部の自動クリーン機能などで、常に清潔な状態を保ちます。
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <GlassWater className="text-[#00c2ff] w-10 h-10 self-start shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#0d4f7a] mb-3 leading-normal">沖縄専用5段階フィルターで<br className="sm:hidden"/>「極上の軟水」へ</h3>
                <p className="text-slate-600 sm:text-lg leading-loose">
                  沖縄の硬い水質や、気になる有機フッ素化合物（PFAS）などをしっかりキャッチする5段階の専用フィルターを搭載。<br/>
                  お茶やコーヒー、お料理の味が美味しくなる「軟水」へと生まれ変わらせます。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/02/琉宮祭LP素材-2.png" 
              alt="5段階フィルターの仕組み" 
              className="w-full h-auto block" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>

        {/* Campaign Section */}
        <div id="campaign" className="bg-[#0d4f7a] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden mt-4">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs border border-white/40 px-3 py-1 rounded-full uppercase tracking-wider font-bold">Campaign</span>
              <span className="text-xs md:text-sm text-yellow-300 font-bold tracking-wide">マルシェご来場者様限定</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              1ヶ月完全無料お試し！
            </h2>
            <p className="text-white/90 mb-10 leading-loose max-w-2xl mx-auto md:text-lg">
              「本当にゴミが出なくなってラクになるか試してみたい」<br/>
              「まずは味に納得してから決めたい」<br/><br/>
              そんなあなたのために、<br className="md:hidden"/>
              <span className="font-bold underline decoration-yellow-300 decoration-2 underline-offset-4">【1ヶ月完全無料お試しキャンペーン】</span>を実施中です！
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-left w-full max-w-xl mx-auto mb-10 bg-white/5 p-6 rounded-xl border border-white/10">
              <li className="flex items-center gap-3 text-lg">
                <span className="self-start shrink-0 bg-white text-[#0d4f7a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-black mt-0.5 shadow-sm">✓</span>
                設置費用 0円
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="self-start shrink-0 bg-white text-[#0d4f7a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-black mt-0.5 shadow-sm">✓</span>
                お水代 1ヶ月0円
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="self-start shrink-0 bg-white text-[#0d4f7a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-black mt-0.5 shadow-sm">✓</span>
                撤去費用 0円
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="self-start shrink-0 bg-white text-[#0d4f7a] rounded-full w-6 h-6 flex items-center justify-center text-sm font-black mt-0.5 shadow-sm">✓</span>
                自動更新・課金なし
              </li>
            </ul>

            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ryugusai.png" 
              alt="キャンペーンモデル" 
              className="w-full max-w-sm md:max-w-md h-auto mx-auto mb-8 rounded-xl shadow-2xl border border-white/20" 
              referrerPolicy="no-referrer" 
            />

            <a 
              href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=Kkhob1&liff_id=1656783300-KLG90La1" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-xl mx-auto bg-[#ffea00] hover:bg-yellow-400 text-[#08203c] font-black text-lg md:text-2xl text-center py-5 px-6 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 group"
            >
              ▼無料お試し・お問い合わせはこちら
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm md:text-base text-white/70 mt-6 max-w-xl mx-auto font-medium">
              「うちのキッチンにも置ける？」「まずは話だけ聞きたい」という方も、LINEからお気軽にご相談ください！
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 md:py-12 shrink-0 flex flex-col items-center justify-center gap-6 px-4 pb-12">
        <a href="#" className="hover:opacity-90 transition-opacity block">
          <img 
            src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ラクトク-バナーのコピー.png" 
            alt="Footer Banner" 
            className="max-w-md w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>
        <div className="text-xs md:text-sm text-slate-400 flex flex-col items-center text-center max-w-2xl font-medium">
          <p className="mb-2">株式会社SmileGrit | 沖縄県を拠点に、暮らしを豊かにするサービスを提供しています。</p>
          <p className="uppercase tracking-tighter">&copy; {new Date().getFullYear()} SmileGrit Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
