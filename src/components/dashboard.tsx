import { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Shield, 
  Phone, 
  Users, 
  MapPin, 
  Mic, 
  Camera, 
  Navigation, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Menu,
  Settings,
  User,
  Battery,
  Wifi,
  Signal,
  Volume2,
  Circle,
  Play,
  Pause
} from "lucide-react";

interface DashboardProps {
  onSignOut: () => void;
}

export function Dashboard({ onSignOut }: DashboardProps) {
  const [activeFeatures, setActiveFeatures] = useState({
    smartIVR: true,
    meshNetwork: true,
    safePaths: true,
    evidenceLocker: true
  });
  // Calculate safety level based on active features
  const safetyLevel = useMemo(() => {
    const activeCount = Object.values(activeFeatures).filter(Boolean).length;
    return Math.round((activeCount / 4) * 100);
  }, [activeFeatures]);
  const [isRecording, setIsRecording] = useState(false);
  const [meshConnections, setMeshConnections] = useState(12);
  const [currentLocation, setCurrentLocation] = useState("Connaught Place, Delhi");

  const [emergencyContacts] = useState([
    { name: "Emergency Services", number: "112" },
    { name: "Police", number: "100" },
    { name: "Women Helpline", number: "181" }
  ]);

  useEffect(() => {
    // Simulate mesh network updates
    const interval = setInterval(() => {
      setMeshConnections(prev => Math.max(8, Math.min(20, prev + Math.floor(Math.random() * 3) - 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSOSAlert = () => {
    alert("🚨 SOS ACTIVATED!\n\n✓ Location shared with emergency contacts\n✓ Audio recording started\n✓ Mesh network alerted\n✓ Evidence collection initiated");
  };

  const handlePretendCall = () => {
    alert("📞 Incoming call from 'Delhi Police'...\n\n'Hello, this is Inspector Sharma from Delhi Police. We need you to come to the station immediately for questioning regarding a case.'");
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      alert("🎤 Evidence recording started\n\nAudio and location data being securely stored...");
    }
  };

  const findSafePath = () => {
    alert("🗺️ Safe Path Found!\n\n✓ Route through well-lit areas\n✓ Avoiding recent incident zones\n✓ 3 verified safe spots on route\n✓ Estimated time: 12 minutes");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Guard<span className="text-purple-600">Her</span>
              </span>
            </div>
            
            {/* Status Indicators */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-slate-600">{meshConnections} nearby</span>
              </div>
            </div>

            <Button variant="outline" onClick={onSignOut} className="border-slate-300">
              <User className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Safety Status */}
        <div className="mb-8">
          <Card className={`p-6 ${
            safetyLevel >= 75 ? 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200' :
            safetyLevel >= 50 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' :
            safetyLevel >= 25 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200' :
            'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Safety Status</h2>
                <p className={`${
                  safetyLevel >= 75 ? 'text-green-600' :
                  safetyLevel >= 50 ? 'text-yellow-600' :
                  safetyLevel >= 25 ? 'text-orange-600' :
                  'text-red-600'
                }`}>
                  {safetyLevel >= 75 ? 'All systems operational' :
                   safetyLevel >= 50 ? 'Some features disabled' :
                   safetyLevel >= 25 ? 'Limited protection active' :
                   'Critical: Enable safety features'}
                </p>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${
                  safetyLevel >= 75 ? 'text-green-600' :
                  safetyLevel >= 50 ? 'text-yellow-600' :
                  safetyLevel >= 25 ? 'text-orange-600' :
                  'text-red-600'
                }`}>{safetyLevel}%</div>
                <p className="text-sm text-slate-600">Protection Level</p>
              </div>
            </div>
            <Progress value={safetyLevel} className="h-2" />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-slate-700">Location: {currentLocation}</span>
              </div>
              <Badge 
                variant="secondary" 
                className={`${
                  safetyLevel >= 75 ? 'bg-green-100 text-green-700' :
                  safetyLevel >= 50 ? 'bg-yellow-100 text-yellow-700' :
                  safetyLevel >= 25 ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}
              >
                {safetyLevel >= 75 ? 'PROTECTED' :
                 safetyLevel >= 50 ? 'PARTIAL' :
                 safetyLevel >= 25 ? 'LIMITED' :
                 'VULNERABLE'}
              </Badge>
            </div>
          </Card>
        </div>

        {/* Emergency Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emergency SOS</h3>
              <p className="text-slate-600 mb-4">Instant alert to all emergency contacts and nearby GuardHer users</p>
              <Button 
                onClick={handleSOSAlert}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white w-full py-3"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                ACTIVATE SOS
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pretend-a-Call</h3>
              <p className="text-slate-600 mb-4">Receive a fake authoritative call to deter suspicious situations</p>
              <Button 
                onClick={handlePretendCall}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                FAKE CALL
              </Button>
            </div>
          </Card>
        </div>

        {/* Feature Controls */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Smart IVR & Digital Pukaar */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mic className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Smart IVR & Digital Pukaar</h3>
                  <p className="text-sm text-slate-600">Voice-activated emergency response</p>
                </div>
              </div>
              <Switch 
                checked={activeFeatures.smartIVR}
                onCheckedChange={(checked: boolean) => setActiveFeatures(prev => ({ ...prev, smartIVR: checked }))}
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Voice Commands</span>
                  <Badge variant="secondary" className={activeFeatures.smartIVR ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {activeFeatures.smartIVR ? "LISTENING" : "DISABLED"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.smartIVR ? 'Say "Help" or "Bachao" to trigger emergency alert' : 'Enable Smart IVR to activate voice commands'}
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Location Triangulation</span>
                  <Badge variant="secondary" className={activeFeatures.smartIVR ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {activeFeatures.smartIVR ? "ACTIVE" : "DISABLED"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.smartIVR ? 'Precise location via cell tower triangulation' : 'Location services disabled'}
                </p>
              </div>
            </div>
          </Card>

          {/* Community Mesh Network */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Rakshak Ring Network</h3>
                  <p className="text-sm text-slate-600">Community mesh safety network</p>
                </div>
              </div>
              <Switch 
                checked={activeFeatures.meshNetwork}
                onCheckedChange={(checked: boolean) => setActiveFeatures(prev => ({ ...prev, meshNetwork: checked }))}
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Connected Users</span>
                  <Badge variant="secondary" className={activeFeatures.meshNetwork ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {activeFeatures.meshNetwork ? `${meshConnections} nearby` : "DISCONNECTED"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.meshNetwork ? 'BLE mesh network within 100m range' : 'Enable mesh network to connect with nearby users'}
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Network Status</span>
                  <Badge variant="secondary" className={activeFeatures.meshNetwork ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}>
                    {activeFeatures.meshNetwork ? "STRONG" : "OFFLINE"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.meshNetwork ? 'Offline emergency relay capability active' : 'Network relay disabled'}
                </p>
              </div>
            </div>
          </Card>

          {/* SafePaths Navigation */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">SafePaths Navigation</h3>
                  <p className="text-sm text-slate-600">Crowdsourced safety heatmaps</p>
                </div>
              </div>
              <Switch 
                checked={activeFeatures.safePaths}
                onCheckedChange={(checked: boolean) => setActiveFeatures(prev => ({ ...prev, safePaths: checked }))}
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Current Area Safety</span>
                  <Badge variant="secondary" className={activeFeatures.safePaths ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {activeFeatures.safePaths ? "SAFE" : "UNKNOWN"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.safePaths ? 'Well-lit area with verified safe spots nearby' : 'Enable SafePaths to view area safety data'}
                </p>
              </div>
              
              <Button 
                onClick={findSafePath}
                variant="outline" 
                className={`w-full ${activeFeatures.safePaths ? 'border-purple-300 text-purple-700 hover:bg-purple-50' : 'border-slate-300 text-slate-400 cursor-not-allowed'}`}
                disabled={!activeFeatures.safePaths}
              >
                <Navigation className="w-4 h-4 mr-2" />
                {activeFeatures.safePaths ? 'Find Safe Route' : 'Enable SafePaths'}
              </Button>
            </div>
          </Card>

          {/* Digital Evidence Locker */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Evidence Locker</h3>
                  <p className="text-sm text-slate-600">Secure evidence collection</p>
                </div>
              </div>
              <Switch 
                checked={activeFeatures.evidenceLocker}
                onCheckedChange={(checked: boolean) => setActiveFeatures(prev => ({ ...prev, evidenceLocker: checked }))}
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Auto Recording</span>
                  <Badge variant="secondary" className={
                    activeFeatures.evidenceLocker 
                      ? (isRecording ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")
                      : "bg-red-100 text-red-700"
                  }>
                    {activeFeatures.evidenceLocker 
                      ? (isRecording ? "RECORDING" : "STANDBY")
                      : "DISABLED"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {activeFeatures.evidenceLocker 
                    ? 'Audio, visual & location evidence on SOS trigger'
                    : 'Enable Evidence Locker to record emergency evidence'}
                </p>
              </div>
              
              <Button 
                onClick={toggleRecording}
                variant="outline" 
                className={`w-full ${
                  !activeFeatures.evidenceLocker 
                    ? 'border-slate-300 text-slate-400 cursor-not-allowed'
                    : isRecording 
                      ? 'border-red-300 text-red-700 hover:bg-red-50' 
                      : 'border-slate-300'
                }`}
                disabled={!activeFeatures.evidenceLocker}
              >
                {isRecording ? <Pause className="w-4 h-4 mr-2" /> : <Circle className="w-4 h-4 mr-2" />}
                {!activeFeatures.evidenceLocker 
                  ? "Enable Evidence Locker"
                  : isRecording 
                    ? "Stop Recording" 
                    : "Start Recording"}
              </Button>
            </div>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="p-6 mt-8">
          <h3 className="font-bold text-slate-900 mb-4">Emergency Contacts</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{contact.name}</p>
                  <p className="text-sm text-slate-600">{contact.number}</p>
                </div>
                <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="p-4 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">24/7</div>
            <p className="text-sm text-slate-600">Protection Active</p>
          </Card>
          
          <Card className="p-4 text-center">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">4</div>
            <p className="text-sm text-slate-600">Safety Layers</p>
          </Card>
          
          <Card className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">{meshConnections}</div>
            <p className="text-sm text-slate-600">Network Size</p>
          </Card>
          
          <Card className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">0</div>
            <p className="text-sm text-slate-600">Active Incidents</p>
          </Card>
        </div>
      </div>
    </div>
  );
}